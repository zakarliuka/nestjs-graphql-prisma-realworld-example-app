import { ArticleWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/ArticleWhereUniqueInput';
import { CommentWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/CommentWhereUniqueInput';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'app_modules/current-user-decorator';
import { GraphqlFields } from 'app_modules/nestjs-graphql-fields';
import {
    GraphqlAuthGuard,
    OptionalGraphqlAuthGuard,
} from 'app_modules/nestjs-passport-graphql-auth-guard';
import { PlainObject } from 'simplytyped';

import { ArticleService } from '../article/article.service';
import { AuthorGuard } from './author.guard';
import { CommentService } from './comment.service';
import { Comment } from './models/comment';
import { CreateCommentInput } from './models/create-comment.input';

/**
 * Resolver for article comment type.
 */
@Resolver(() => Comment)
export class CommentResolver {
    constructor(
        private readonly commentService: CommentService,
        private readonly articleService: ArticleService,
    ) {}

    @Query(() => [Comment])
    @UseGuards(OptionalGraphqlAuthGuard)
    async articleComments(
        @Args('where') where: ArticleWhereUniqueInput,
        @CurrentUser() currentUser: { id: string },
        @GraphqlFields() fields: PlainObject,
    ) {
        const articleExists = (await this.articleService.count(where)) !== 0;
        if (!articleExists) {
            throw new NotFoundException(`Article ${JSON.stringify(where)} does not exist`);
        }
        return this.commentService.get({ where, follower: currentUser });
    }

    @Mutation(() => Comment)
    @UseGuards(GraphqlAuthGuard)
    async createComment(
        @Args('data') data: CreateCommentInput,
        @Args('where') where: ArticleWhereUniqueInput,
        @CurrentUser() currentUser: { id: string },
    ) {
        const articleExists = (await this.articleService.count(where)) !== 0;
        if (!articleExists) {
            throw new NotFoundException(`Article ${JSON.stringify(where)} does not exist`);
        }
        return this.commentService.createComment({
            where,
            body: data.body,
            authorId: currentUser.id,
        });
    }

    @Mutation(() => Comment)
    @UseGuards(GraphqlAuthGuard, AuthorGuard)
    async deleteComment(@Args('where') where: CommentWhereUniqueInput) {
        return this.commentService.delete({ where });
    }
}
