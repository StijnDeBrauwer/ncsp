export class ScrollModel{


    subMenuOpen: boolean;
    navOpen: boolean;

    constructor(subMenuOpen: boolean, navOpen: boolean) {
        this.subMenuOpen = subMenuOpen;
        this.navOpen = navOpen;
        // console.log('created datamodel of scroll with config: ');
        // console.log(`subMenuOpen: ${this.subMenuOpen}`);
        // console.log(`navOpen: ${this.navOpen}`);
    }

}