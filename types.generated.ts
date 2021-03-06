// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Publication documents */
interface PublicationDocumentData {
    /**
     * Slice Zone field in *Publication*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: publication.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PublicationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Publication → Slice Zone*
 *
 */
type PublicationDocumentDataSlicesSlice = PostSlice;
/**
 * Publication document from Prismic
 *
 * - **API ID**: `publication`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PublicationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PublicationDocumentData>, "publication", Lang>;
export type AllDocumentTypes = PublicationDocument;
/**
 * Primary content in Post → Primary
 *
 */
interface PostSliceDefaultPrimary {
    /**
     * Title field in *Post → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: post.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content Post field in *Post → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.primary.ContentPost
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    ContentPost: prismicT.RichTextField;
}
/**
 * Default variation for Post Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Post`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<PostSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Post*
 *
 */
type PostSliceVariation = PostSliceDefault;
/**
 * Post Shared Slice
 *
 * - **API ID**: `post`
 * - **Description**: `Post`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PostSlice = prismicT.SharedSlice<"post", PostSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
}
