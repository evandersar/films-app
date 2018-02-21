export class Film {
    public title : string;
    public episode_id : number;
    public director : string;
    public producer : string;
    public release_date : string;

    constructor(title, episode_id, director, producer, release_date){
        this.title = title;
        this.episode_id = episode_id;
        this.director = director;
        this.producer = producer;
        this.release_date = release_date;
    }
}