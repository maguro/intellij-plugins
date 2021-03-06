// Copyright 2000-2019 JetBrains s.r.o. Use of this source code is governed by the Apache 2.0 license that can be found in the LICENSE file.
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template:`<div style="text-align:center">
        <h1>
            Welcome to {{ title }}!
            <input <error>([ngModel])</error>="name" #ctrl="ngModel" required>
        </h1>
  </div>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = <error>"ng-cli-codelyzer"</error>;
}
