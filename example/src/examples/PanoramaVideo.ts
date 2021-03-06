import {PanoramaRenderer} from '../../../src/';
import ImageLoader from '../utils/ImageLoader';

export default class Panorama {
  private renderer: PanoramaRenderer;
  private wrapper: HTMLElement;
  private video: HTMLVideoElement;

  constructor(wrapper: HTMLElement) {
    this.wrapper = wrapper;
    this.video = <HTMLVideoElement>document.querySelector('.js-video');
    ImageLoader.loadImages(['panorama_1.jpg']).then(this.init.bind(this));
  }

  private init(): void {
    this.renderer = new PanoramaRenderer(this.wrapper.querySelector('.canvas'), this.video);
    this.renderer.init();

    this.wrapper.querySelector('.js-play').addEventListener('click', () => this.renderer.play());
    this.wrapper.querySelector('.js-stop').addEventListener('click', () => this.renderer.pause());

    this.video.addEventListener('play', this.onVideoPlay.bind(this));
    this.video.play();
  }

  private onVideoPlay(): void {
    requestAnimationFrame(this.tick.bind(this));
  }

  private tick(): void {
    this.renderer.updateImage(this.video);
    requestAnimationFrame(this.tick.bind(this));
  }
}
