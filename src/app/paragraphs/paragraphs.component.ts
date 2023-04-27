import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraphs',
  templateUrl: './paragraphs.component.html',
  styleUrls: ['./paragraphs.component.css']
})
export class ParagraphsComponent {

  textColor='black'
  changeColor(index: number): void {
    console.log('button clicked')
    this.textColor=(this.basicColors[index])
  }

  basicColors = [
  'black',
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'gray',
  'brown',
  'orange'
];

  LoremIpsumArray = [
  {
    title: 'Lorem Ipsum 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Lorem Ipsum 2',
    content: 'Vivamus scelerisque auctor malesuada. Nulla interdum consequat orci, at interdum purus ultrices quis.'
  },
  {
    title: 'Lorem Ipsum 3',
    content: 'Sed nec leo metus. Suspendisse potenti. Etiam vel eleifend purus. Sed ut elementum enim.'
  },
  {
    title: 'Lorem Ipsum 4',
    content: 'Cras in ullamcorper nunc. Fusce nec sapien metus. Quisque non enim felis.'
  },
  {
    title: 'Lorem Ipsum 5',
    content: 'Fusce eget erat in purus egestas suscipit vel nec tellus. Sed ornare ante id ante interdum, quis consequat libero venenatis.'
  },
  {
    title: 'Lorem Ipsum 6',
    content: 'Aenean efficitur neque in blandit luctus. Mauris vel felis vitae velit fringilla euismod a at enim.'
  },
  {
    title: 'Lorem Ipsum 7',
    content: 'Sed vulputate, dui in bibendum viverra, mi nibh cursus ante, sed posuere sapien justo vel urna.'
  }
];


}
