# NewsPaperSubscriptionObservables

## Link to miro board with descriptions in pictures and event model (TBD)
https://miro.com/app/board/uXjVOaH4qE0=/?invite_link_id=333951731707


## Förklaring på konceptet Observables , 
OBS! 😂  Det här är liknelser och inte 100% sanning, men jag hoppas att det ger en bra bild.
Läs mer på https://angular.io/guide/observables#basic-usage-and-terms för just observables i Angular.

Inom IT-systemvärlden finns det ett koncept som kallas för "pub-sub" (förkortning av publish-subscribe). Dvs publicera-prenumerera på svenska.

I systemet har man då en del som ansvarar för att signalera till prenumeranterna när något nytt är publicerat. Denna del är ofta kallad någonting med "Hub" och är egentligen en meddelandehanterare, en "dispatcher", en central av något slag.


Googla och leta eller kika på denna artikel:  https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern

## Observables liknat med en telefonväxel.
Man kan jämföra detta med en gammaldags telefonväxel eller en kundtjänst där det sitter en person och tar emot inkommande samtal.
Vi kallar denna person för dispatcher då rollens ansvar är att skicka vidare inkommande (publicerade) samtal till rätt destination (en prenumerant).
Inkommande samtal kan liknas med "publicerade" samtal. Publicerade, från uppringaren, till det centrala systemet (växeln) ; vilken skickar vidare till Prenumeranter, i fallet där samtalet ska gå till en person med ett specifikt nummer finns det bara en Prenumerant.  Om det istället är ett samtal till en avdelning, t ex en supportavdelning kanske det ringer i flera telefoner samtidigt.

För att inte få fler samtal på ett specifikt nummer måste man säga upp sitt abonnemang (unsubscribe).

## Observables liknat med en tidningsprenumeration.
Man kan även jämföra detta med en postterminal som hanterar tidningsutskick. (Se exemplet med bilder här)

- En utgivare (Dagens nyheter) publicerar en tidning.
- Postterminalen är i det här fallet distributören (som en dispatcher) och tar denna publicerade tidning (n antal kopior) och skickar vidare till alla prenumeranter.
- För att inte längre få tidningen i brevlådan behöver prenumeranten avsluta prenumerationen (unsubscribe); ett bra exempel är att man ofta kan pausa sin prenumeration tillfälligt under semestern för att inte få en översvämmad brevlåda (memory leaks).




## Default readme stuff >> 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
