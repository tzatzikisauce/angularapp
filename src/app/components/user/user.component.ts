import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    // template: '<h2> Mike Nicolaou</h2>'
})

export class UserComponent implements OnInit{
    //properties
    user: User;
    
    // Methods
    constructor() {
        
    }

    ngOnInit() {
        this.user = {
            firstName: 'Mike',
            lastName: 'Nicolaou',
            email: 'mike@gmail.com'
        }    
    }
}