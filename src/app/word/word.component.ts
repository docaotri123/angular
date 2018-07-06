import {Component} from '@angular/core';
import { Hero } from '../hero';

@Component({
    templateUrl:'./word.component.html',
    selector:'app-word',
    styleUrls:['./word.component.css']
})

export class WordComponent{
    en='Tri DO';
    forgot=false;

    toggleForgot(){
        this.forgot=!this.forgot;
    }
}


