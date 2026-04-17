import { Component } from '@angular/core';
import { Em01Boutons } from './em01-boutons/em01-boutons';
import { Em07Table } from './em07-table/em07-table';

@Component({
  selector: 'app-exos-material',
  imports: [Em01Boutons,Em07Table],
  templateUrl: './exos-material.html',
  styleUrl: './exos-material.scss',
})
export class ExosMaterial {}
