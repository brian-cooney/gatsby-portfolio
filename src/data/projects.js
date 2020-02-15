import andco from '../content/projects/andco.png'
import masonFifth from '../content/projects/mason-fifth.png'
import catchOfDay from '../content/projects/catch-of-day.png'
import brandworkz from '../content/projects/brandworkz.png'
import propeller from '../content/projects/propeller.png'
import stamford from '../content/projects/stamford.png'
import ec1 from '../content/projects/ec1.png'
import pinata from '../content/projects/pinata.png'
import omnifood from '../content/projects/omnifood.png'

const projects = [
  {
    title: 'AndCo',
    image: `${andco}`,
    body: 'Co-working booking platform designed & built by CrowdForm',
    tech: 'React | Node | Express | MongoDB | Jest | Styled Components',
    url: 'https://www.crowdform.co.uk/work/andco',
  },
  {
    title: 'Mason & Fifth',
    image: `${masonFifth}`,
    body: 'Co-living platform designed & built by CrowdForm',
    tech: 'React | Node | Express | Prisma | Apollo | Styled Components',
    url: 'https://www.crowdform.co.uk/work/mason-fifth',
  },
  {
    title: 'Wes Bos course',
    image: `${catchOfDay}`,
    body: 'React app with Firebase real time web socket data store',
    tech: 'ReactJS | Firebase | twitter auth ',
    url: 'https://react-with-twitter-auth.netlify.com/',
  },
  {
    title: 'Brandworkz',
    image: `${brandworkz}`,
    body: 'Digital asset management SAAS product built by Brandworkz',
    tech: 'React | Python | Storybook | bootstrap',
    url: 'https://www.brandworkz.com/',
  },
  {
    title: 'Propeller Group',
    image: `${propeller}`,
    body:
      'Custom theme development for a PR group with sage roots designed & built by CrowdForm',
    tech: 'JS | SCSS | BEM | PHP | jQuery',
    url: 'https://propellergroup.com/',
  },
  {
    title: 'Stamford Associates',
    image: `${stamford}`,
    body:
      'Custom theme development for an investment consultancy with sage roots designed & built by CrowdForm',
    tech: 'JS | SCSS | BEM | PHP | jQuery',
    url: 'https://www.stamfordassociates.com/',
  },
  {
    title: 'EC 1',
    image: `${ec1}`,
    body: 'Gallery concept to experiment with the Bulma CSS library',
    tech: 'HTML | CSS | Bulma',
    url: 'https://brian-cooney.github.io/EC1/',
  },
  {
    title: 'Pinata',
    image: `${pinata}`,
    body: 'API widgets Login: email: brian@brian.com, password: password',
    tech: 'MEAN | AngularJS | Tachyons | Express',
    url: 'https://pinata-api-feed.herokuapp.com/',
  },
  {
    title: 'Omnifood concept',
    image: `${omnifood}`,
    body: 'Restaurant concept',
    tech: 'HTML | CSS | jQuery',
    url: 'https://pinata-api-feed.herokuapp.com/',
  },
]

export default projects
