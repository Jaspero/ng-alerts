import {JasperoBuilder} from './src/jaspero-builder.service';

export class TestNeste {

}

export class Test {
    @JasperoBuilder.dec({initial: ''})
    firstName: string;

    @JasperoBuilder.dec({initial: ''})
    lastName: TestNeste;
}