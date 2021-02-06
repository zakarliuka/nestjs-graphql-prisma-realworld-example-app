import { Field, InputType } from '@nestjs/graphql';
import { ArticleCreateOrConnectWithouttagsInput } from './article-create-or-connect-withouttags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutTagsInput } from './article-update-many-with-where-without-tags.input';
import { ArticleUpdateWithWhereUniqueWithoutTagsInput } from './article-update-with-where-unique-without-tags.input';
import { ArticleUpsertWithWhereUniqueWithoutTagsInput } from './article-upsert-with-where-unique-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';


@InputType()
export class ArticleUpdateManyWithoutTagsInput {

    @Field(() => [ArticleCreateWithoutTagsInput], {
            nullable: true,
        })
    create?: Array<ArticleCreateWithoutTagsInput>;

    @Field(() => [ArticleCreateOrConnectWithouttagsInput], {
            nullable: true,
        })
    connectOrCreate?: Array<ArticleCreateOrConnectWithouttagsInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutTagsInput], {
            nullable: true,
        })
    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ArticleWhereUniqueInput], {
            nullable: true,
        })
    connect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
            nullable: true,
        })
    set?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
            nullable: true,
        })
    disconnect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
            nullable: true,
        })
    delete?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutTagsInput], {
            nullable: true,
        })
    update?: Array<ArticleUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutTagsInput], {
            nullable: true,
        })
    updateMany?: Array<ArticleUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ArticleScalarWhereInput], {
            nullable: true,
        })
    deleteMany?: Array<ArticleScalarWhereInput>;
}
