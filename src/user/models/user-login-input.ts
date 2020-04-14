import { Field, InputType } from 'type-graphql';

/**
 * Credentials DTO object.
 */
@InputType()
export class UserLoginInput {
    @Field(() => String, {
        description: undefined,
    })
    email: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    password: string;
}
