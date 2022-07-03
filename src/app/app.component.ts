import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    length = 0;
    onChangeLength(value: string) {
        const parsedValue = parseInt(value);
        if (!isNaN(parsedValue) && parsedValue>0) {
            this.length = parsedValue;
        }
    }

    includeLetters = false;
    onChangeUseLetters() {
        this.includeLetters = !this.includeLetters;
    }

    includeNumbers = false;
    onChangeUseNumbers() {
        this.includeNumbers = !this.includeNumbers;
    }

    includeSymbols = false;
    onChangeUseSymbols() {
        this.includeSymbols = !this.includeSymbols;
    }
    password = '';

    onGenerateButtonCLick() {
        const numbers = '1234567890';
        const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        const symbols = '!@#$%^&*()';

        let validChars = '';

        if (this.includeLetters) {
            validChars += letters;
        }
        if (this.includeNumbers) {
            validChars += numbers;
        }
        if (this.includeSymbols) {
            validChars += symbols;
        }
        console.log(`About to generate a new password with following condition:
            Include Letters: ${ this.includeLetters }
            Include Numbers: ${this.includeNumbers}
            Include Symbols: ${this.includeSymbols}
            `);

        let generatedpassword = '';

        for (let i = 0; i < this.length; i++) {
            const index = Math.floor(Math.random() * validChars.length);
            generatedpassword += validChars[index];
        }
        this.password = generatedpassword;
    }

}
