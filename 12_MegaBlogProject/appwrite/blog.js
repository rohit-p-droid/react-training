import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class BlogService {
    client = new Client();
    storage;
    databases;

    constructor() {
        this.client = this.client
            .setEndpoint(config.APPWRITE_URL)
            .setProject(config.APPWRITE_PROJECT_ID);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, createdBy }) {
        try {
            return await this.databases.createDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title: title,
                    content: content,
                    featured_image: featuredImage,
                    status: status,
                    created_by: createdBy
                }
            )
        } catch (error) {
            throw error;
            
        }
    }

    async updatePost(slug, {title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug,
                {
                    title: title,
                    content: content,
                    featured_image: featuredImage,
                    status: status,
                }
            )
        } catch (error) {
            throw error;
            
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "ACTIVE")]) {
        try {
            return await this.databases.listDocuments(
                config.APPWRITE_DATABASE_ID,
                config.APPWRITE_COLLECTION_ID,
                queries
            )
        } catch (error) {
            throw error;
        }
    }

    // file upload services
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.APPWRITE_BUCKET_ID,
                fileId
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.storage.getFilePreview(
                config.APPWRITE_BUCKET_ID,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }
}

const blogService = new BlogService();

export default blogService;