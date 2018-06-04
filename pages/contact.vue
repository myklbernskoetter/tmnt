<template>

  <div class="contact-container">
    <div class="split-page">
      <div class="title-wrapper">
        <h1 class="headline-1 contact-title" key="title">Contact</h1>
        <ul class="word-spinner" key="spinner">
          <li class="word" mode="out-in" v-for='(item, index) in contacts' :key='index' v-bind:class="{active: counter >= index + 1}">
            <a class="contact-link" v-bind:href="item.link" rel="noopener" v-bind:target="item.target">
              <span v-html="item.symbol" class="icon-wrapper"></span>
              {{item.name}}
            </a>
          </li>
        </ul>
      </div>
      <div class="page-detail-wrapper">
        <div key="page-detail" class="contact-image-wrapper">
          <img class="contact-image" src="/images/mykl-illustration.png" alt="The boy who lived.  Boy, do I look like Harry Potter or what?">
        </div>
      </div>
    </div>
    <footer class="site-footer">
      <div class="attributions">
        kollektif font by <a href="http://www.bravenewfonts.com/">Brave New Fonts</a>
        <div>Icons made by:
          <span class="icon-attribution"><a rel="noopener" target="_blank" href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></span>
          <span class="icon-attribution"><a rel="noopener" target="_blank" href="https://www.flaticon.com/authors/uiuxer" title="UIUXER">UIUXER</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></span>
          <span class="icon-attribution"><a rel="noopener" target="_blank" href="https://www.flaticon.com/authors/elegant-themes" title="Elegant Themes">Elegant Themes</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></span>
          <span class="icon-attribution"><a rel="noopener" target="_blank" href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></span>
          <span class="icon-attribution"><a rel="noopener" target="_blank" href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></span>
          <span class="icon-attribution"><a rel="noopener" target="_blank" href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></span>
        </div>
        <div>Illustration by <a rel="noopener" target="_blank" href="https://www.instagram.com/artimos/">Art Ramirez</a></div>
      </div>
      <div class="copyright">
        &copy; {{year}} Mykl Bernskoetter
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      year: '',
      contacts: [
        {name: 'Resume', link: 'Mykl-Bernskoetter-Resume.pdf', target: '_blank', symbol: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px"
        	 viewBox="0 0 299.994 299.994" style="enable-background:new 0 0 299.994 299.994;" xml:space="preserve">
        <g>
        	<g>
        		<g>
        			<rect x="87.751" y="180.456" width="93.369" height="10.374"/>
        			<rect x="87.751" y="157.444" width="93.369" height="10.374"/>
        			<rect x="87.751" y="134.433" width="93.369" height="10.374"/>
        			<rect x="87.751" y="204.792" width="93.369" height="10.374"/>
        			<path d="M149.997,0C67.156,0,0,67.156,0,149.997s67.156,149.997,149.997,149.997s149.997-67.156,149.997-149.997
        				S232.839,0,149.997,0z M201.641,211.953v18.225c0,10.066-8.159,18.225-18.22,18.225H85.453c-10.066,0-18.225-8.159-18.225-18.225
        				V95.763c0-10.066,8.157-18.225,18.225-18.225h97.967c10.066,0,18.223,8.159,18.22,18.228c0.001,0,0.001,18.222,0.001,18.222
        				V211.953z M224.986,188.61v18.217c0,8.237-5.467,15.193-12.971,17.45v-12.325v-97.967V95.763
        				c0-15.769-12.828-28.599-28.594-28.599H91.349c2.259-7.503,9.21-12.971,17.45-12.971h97.967c10.061,0,18.22,8.162,18.217,18.228
        				v18.223h0.003V188.61z"/>
        			<rect x="87.751" y="111.418" width="93.369" height="10.374"/>
        		</g>
        	</g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>`},
        {name: 'mbernskoetter5@gmail.com', link: 'mailto:mbernskoetter5@gmail.com', target: '_self', symbol: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Layer_1" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 299.997 299.997" style="enable-background:new 0 0 299.997 299.997;" xml:space="preserve">
        <g>
        	<g>
        		<path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
        			C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009
        			c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749
        			l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721
        			c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0
        			c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721
        			c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749
        			V196.423z"/>
        	</g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>`},
        {name: '417-849-0082', link: 'tel:14178490082', target: '_self', symbol: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 width="40px" height="40px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;"
        	 xml:space="preserve">
        <g>
        	<path d="M242.607,0C108.629,0,0.001,108.628,0.001,242.606c0,133.976,108.628,242.606,242.606,242.606
        		c133.978,0,242.604-108.631,242.604-242.606C485.212,108.628,376.585,0,242.607,0z M370.719,353.989l-19.425,19.429
        		c-3.468,3.463-13.623,5.624-13.949,5.624c-61.452,0.536-120.621-23.602-164.095-67.08c-43.593-43.618-67.759-102.998-67.11-164.657
        		c0-0.028,2.224-9.892,5.689-13.324l19.424-19.427c7.108-7.141,20.762-10.368,30.327-7.168l4.086,1.363
        		c9.537,3.197,19.55,13.742,22.185,23.457l9.771,35.862c2.635,9.743-0.919,23.604-8.025,30.712l-12.97,12.972
        		c12.734,47.142,49.723,84.138,96.873,96.903l12.965-12.975c7.141-7.141,20.997-10.692,30.719-8.061l35.857,9.806
        		c9.717,2.67,20.26,12.62,23.456,22.154l1.363,4.145C381.028,333.262,377.826,346.913,370.719,353.989z"/>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>`},
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/mykl-bernskoetter', target: '_blank', symbol: `<?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px"
        	 viewBox="0 0 486.392 486.392" style="enable-background:new 0 0 486.392 486.392;" xml:space="preserve">
        <g>
        	<g>
        		<g>
        			<path d="M243.196,0C108.891,0,0,108.891,0,243.196s108.891,243.196,243.196,243.196
        				s243.196-108.891,243.196-243.196C486.392,108.861,377.501,0,243.196,0z M182.397,360.994h-60.799V148.197h60.799V360.994z
        				 M153.882,135.156c-15.747,0-28.484-12.768-28.484-28.515s12.768-28.515,28.484-28.515c15.747,0.03,28.515,12.798,28.515,28.515
        				C182.397,122.388,169.629,135.156,153.882,135.156z M395.193,360.994h-60.799V229.425c0-15.413-4.408-26.204-23.347-26.204
        				c-31.403,0-37.452,26.204-37.452,26.204v131.569h-60.799V148.197h60.799v20.337c8.694-6.657,30.399-20.307,60.799-20.307
        				c19.699,0,60.799,11.795,60.799,83.051V360.994z"/>
        		</g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        	<g>
        	</g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>`},
        {name: 'CodePen', link: 'https://codepen.io/MB5/', target: '_blank', symbol:
        `<svg class="codepen-icon" viewBox="0 0 512 512" width="40px" height="40px">
          <circle cx="256" cy="256" r="256" />
          <path fill="#fff" class="path" d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4
          191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9
          3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1
          202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4
          -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8
          24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8
          52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6
          36.8-24.6V280.6z"/></svg>` },
        {name: 'Github', link: 'https://github.com/myklbernskoetter', target: '_blank', symbol: `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 438.549 438.549" style="enable-background:new 0 0 438.549 438.549;" xml:space="preserve" class=""><g><g>
        	<path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z" data-original="#000000" class="active-path"/>
        </g></g> </svg>`},
      ]
    }
  },
  transition: 'fadeOpacity',
  beforeMount() {

 const date = new Date();
 const year = date.getFullYear();
 this.year = year;

 const self = this;
  this.intervalid1 = setInterval(function(){
     if (self.counter < 6) {
       self.counter++;
     } else {
       clearInterval(this.intervalid1);
     }
  }, 500);
 }
}
</script>

<style lang="scss" scoped>
  @mixin increment-animation($time-default:250, $loops:1) {
    @for $i from 1 through $loops {
      &:nth-child(#{$i}) {
        animation-delay: $i * $time-default ;
      }
    }
  }
  .split-page {
    @media screen and (min-width: 1020px) {
      margin-top: 5rem;
      overflow: hidden;
    }
  }

  .contact-container {
    margin-top: 12rem;
    overflow-x: hidden;

    @media screen and (min-width: 768px) {
      margin-top: 6rem;
    }

    @media screen and (min-width: 1020px) {
      margin-top: 0;
    }
  }

  .title-wrapper {
    transform: translateX(-10%);
  }

  .contact-title {
    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 100vw;
      height: .2rem;
      background-color: var(--color-black);
      transform: scaleX(0);
      transform-origin: left;
      animation: frame-draw2 450ms linear forwards;
      animation-delay: 2000ms;
    }
  }

  .contact-hero {
    top: 1rem;
    width: 100%;
    z-index: 2;
    opacity: 0;
    animation: fade-in 500ms linear forwards;
    background-color: var(--color-dark-grey);

    @media screen and (min-width: 768px) {
      margin-top: 14rem;
      width: 70%;
    }
  }

  .contact-image-wrapper {
    text-align: center;
    background-color: var(--color-white);
    overflow: hidden;

    @media screen and (min-width: 768px) {
    }
    &::before {
      @media screen and (min-width: 768px) {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: .2rem;
        background-color: var(--color-black);
        transform: scaleX(0);
        transform-origin: right;
        animation: frame-draw2 450ms linear forwards;
        animation-delay: 2000ms;
        z-index: 2;
      }
    }
  }

  .contact-image {
    top: 3rem;
    margin: 0 auto;
      @media screen and (min-width: 768px) {
        max-width: 40rem;
      }
  }

  .contact-link {
    font-weight: 600;
  }

  .word {
    opacity: 0;
    transform: translateX(-10%);

    &.active {
      animation: split-in 500ms ease-out forwards;
      animation-delay: 250ms;
    }
  }

  .word-spinner {
    list-style: none;
  }

  .resume-link-wrapper {
    font-size: 2.5rem;
    text-align: center;
  }

  .resume-link {
    color: var(--color-white);
  }

  .site-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2.5rem;
    font-size: 1.4rem;
    text-align: center;
    color: var(--color-white);
    background-color: var(--color-dark-grey);

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    a {
      font-size: 1.4rem;
      color: inherit;

      &:hover,
      &:focus {
        color: var(--color-yellow);
      }
    }

    .copyright {
      margin-top: 2.5rem;
      @media screen and (min-width: 768px) {
        margin-top: 0;
      }
    }

    .icon-attribution {
      display: block;
    }
  }

  .contact-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3rem 0;
    width: 50%;
    height: 4rem;
    color: var(--color-black);
    text-decoration: none;
    transition: all 125ms;

    &:hover,
    &:focus {
      color: var(--color-magenta);
      fill: var(--color-yellow);
      text-decoration: underline;
    }
  }

  .icon-wrapper {
    margin-right: 2.5rem;
  }


  .codepen-icon {
    .path {
      fill: var(--color-white);
    }
  }
</style>
