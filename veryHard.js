class Person{
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(){
        console.log("Running is fun! - said no one ever.");
    }
    fetchJob(){
        console.log(`${this.name} is a ${this.job}.`);
    }
}

class Programmer extends Person{
    constructor(name, job, age, languages){
        super(name, job, age); // Super() calls the `constructor` of the parent
        this.languages = languages;
        this.busy = true;
    }
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if (this.busy){
            console.log(`${this.name} can't accept any new tasks right now.`);
        }
        else{
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }
    learnLanguage(language){
        this.languages.push(language);
    }
    listLanguages(){
        console.log(`${this.name} knows the following languages: ${this.languages.join(", ")}`);
    }
}

const sebastian = new Programmer("Sebastian", "Full-Stack Developer", 23, ["Html", "CSS", "JavaScript"]);
sebastian.exercise();
sebastian.fetchJob();
sebastian.completeTask();
sebastian.offerNewTask();
sebastian.learnLanguage("React");
sebastian.listLanguages();

const timmy = new Programmer("Timmy", "Back-end Developer", 50, ["C++", "SQL", "C#"]);
timmy.exercise();
timmy.fetchJob();
timmy.completeTask();
timmy.offerNewTask();
timmy.learnLanguage("HTML");
timmy.listLanguages();

const marissa = new Programmer("Marissa", "Associate QAE", 24, ["React", "TypeScript", "Python"]);
marissa.exercise();
marissa.fetchJob();
marissa.completeTask();
marissa.offerNewTask();
marissa.learnLanguage("Ruby");
marissa.listLanguages();