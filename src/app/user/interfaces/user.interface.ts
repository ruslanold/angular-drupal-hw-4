export interface IUser {
    uid: string;
    name: string;
    theme: string;
    signature: string;
    signature_format: string | null;
    created: string;
    access: string;
    login: string;
    status: string;
    timezone: string | null;
    language: string;
    picture: string;
    data: string;
    uri: string;
}