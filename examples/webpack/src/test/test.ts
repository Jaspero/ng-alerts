import {JasperoBuilder} from './src/jaspero-builder.service';

export class Test {
    @JasperoBuilder.dec({initial: ''})
    firstName: string;

    @JasperoBuilder.dec({initial: ''})
    lastName: string;
}