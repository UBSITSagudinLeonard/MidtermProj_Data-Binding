import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Navi } from './comps/navi/navi';
import { CommonModule } from '@angular/common';
import { products } from './comps/products/products';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, RouterLink, Navi, CommonModule, products],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
title = 'midtermApp';
}