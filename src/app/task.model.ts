export class Task {
    public title: string;
    public imagePath?: string;
    public user: string[];
    public date: string;
    public attachments?: number;
    public discussion?: number;

    constructor(title: string, user: string[], date: string, imgPath?: string, attachments?: number, discussion?: number) {
        this.title = title;
        this.user = user;
        this.imagePath = imgPath;
        this.date = date;
        this.attachments = attachments;
        this.discussion = discussion;
    }
}
