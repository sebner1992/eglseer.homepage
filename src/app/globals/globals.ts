export class Globals {
    public imageInfoText;
    public memberInfoText;

    constructor() {
        this.imageInfoText = "Select files to upload!";
        this.memberInfoText = "Select image for member and add description!";
    }

    getImageInfoText() {
        return this.imageInfoText;
    }

    setImageInfoText(any: string) {
        this.imageInfoText = any;
    }

    getMemberInfoText() {
        return this.memberInfoText;
    }

    setMemberInfoText(any: string) {
        this.memberInfoText = any;
    }
}