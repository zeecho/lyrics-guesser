import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import logo from './logo.svg';
//import Button from '@material-ui/core/Button';
//import Table from '@material-ui/core/Table';
// import './App.css';
//import MyTable from './Table';
//import Welcome from './Welcome';

//import TodoList from './Todo/TodoList';
import Lyrics from './Lyrics/Lyrics';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   lyrics: "Monsieur le président je vous fais une bafouille Que vous lirez sûrement si vous avez des couilles Je viens de recevoir un coup d'fil de mes vieux Pour m'prévenir qu'les gendarmes s'étaient pointés chez eux J'ose pas imaginer c'que leur a dit mon père Lui, les flics, les curés et puis les militaires Il les a vraiment dans l'nez, p't-être encore plus que moi Dès qu'il peut en bouffer l'vieil anar' y s'gêne pas, l'vieil anar' y s'gêne pas Alors y parait qu'on m'cherche, qu'la France a besoin d'moi C'est con, j'suis en Ardèche, y fait beau, tu crois pas ?  J'suis là avec des potes, des écolos marrants On a une vieille bicoque, on la retape tranquillement On fait pousser des chèvres, on fabrique des bijoux On peut pas dire qu'on s'crève, l'travail, c'est pas pour nous On a des plantations, pas énormes, trois hectares D'une herbe qui rend moins con, non, c'est pas du Ricard, non, c'est pas du Ricard Monsieur le président je suis un déserteur De ton armée de glands, de ton troupeau d'branleurs Ils auront pas ma peau, toucheront pas à mes cheveux J'saluerai pas l'drapeau, j'marcherai pas comme les bœufs J'irai pas en Allemagne faire le con pendant douze mois Dans une caserne infâme avec des plus cons qu'moi J'aime pas recevoir des ordres, j'aime pas me lever tôt J'aime pas étrangler le borgne, plus souvent qu'il ne faut, plus souvent qu'il ne faut Puis surtout c'qui m'déplaît c'est que j'aime pas la guerre Et qui c'est qui la fait ? Ben c'est les militaires Ils sont nuls, ils sont moches et puis ils sont teigneux Maintenant j'vais t'dire pourquoi j'veux jamais être comme eux Quand les russes, les 'ricains feront péter la planète Moi, j'aurais l'air malin avec ma bicyclette Mon pantalon trop court, mon fusil, mon calot Ma ration d'topinambour et ma ligne Maginot, et ma ligne Maginot Alors me gonfle pas, ni moi, ni tous mes potes Je serai jamais soldat, j'aime pas les bruits de bottes T'as plus qu'à pas t'en faire et construire tranquilos Tes centrales nucléaires, tes sous-marins craignos Mais va pas t'imaginer, monsieur le président Que j'suis manipulé par les rouges ou les blancs Je n'suis qu'un militant du parti des oiseaux Des baleines, des enfants, de la terre et de l'eau, de la terre et de l'eau Monsieur le président pour finir ma bafouille J'voulais t'dire simplement ce soir on fait des nouilles A la ferme c'est l'panard, si tu veux, viens bouffer On fumera un pétard et on pourra causer",
    //   title: "Le déserteur",
    //   artist: "Renaud"
    // }
    this.state = {
      lyrics: "Give me again Give me again Give me again Give me again Hé yo! Chacun son identité mais pour tous la même nation Give me again Give me again Give me again Give me again Chacun sa culture mais pour tous le même pays, mais on est sur que ...  Tout ce qu'ils veulent : c'est une France qui ferme sa gueule Une fois de plus la machine est lancée !  Tout ce qu'ils veulent c'est une nation comme idole Une fois de plus la sentence est tombée !  Tout ce qu'on veut c'est se sentir chez soi Face à l'adversité, ici je reste Tu ferme ta porte mais t'es le bienvenue chez moi Mon identité grandit sans cesse !  BOOM !  J'attaque tes envies de m'voir quitter c'pays J'attaque pour mes frères, la morale et nos vies J'attaque comme le font ces lois J'attaque mensonges et mépris J’attaque, et dans ton pacte une putain d'ironie J'traque ton discours, j'traque ton air fier J'traque tous tes hommes quand ils renvoient les charters Même les plus tranquilles deviennent vénère en tant d'guerre Give the faya hého, give the faya hého Enfants d'immigrés tout c'qu'on fait nos parents nous donne le droit De ne pas douter de ce que l'on est, de ce qu'on fait là Les valeurs se perdent aucun hymne ne les ramènera Mes couleurs au drapeau car trois ne suffisent pas On n'choisit pas où on naît, pas toujours où on va Frères sans papiers, donnant leurs au moins le choix On tue même les hommes certains deviennent des proies On crée des lois pour ça !  Tout ce qu'ils veulent : c'est une France qui ferme sa gueule Une fois de plus la machine est lancée !  Tout ce qu'ils veulent c'est une nation comme idole Une fois de plus la sentence est tombée !  Tout ce qu'on veut c'est se sentir chez soi Face à l'adversité, ici je reste Tu ferme ta porte mais t'es le bienvenue chez moi Mon identité grandit sans cesse !  Né en France, YEAH, je l'aime c'est ma terre Quand elle respecte ces fils, et qu'elle nous considère On reste droit, fiers, nos racines, nos pères Fruit d'une histoire commune, amour et haine vont de pair.  Hisser trois couleurs sur le drapeau Ne suffisent plus à colorer ce tableau De ce pays, de ce peuple aussi beau L'identité ne se résume pas à un mot Ce qu'ont fait nos pères, quitter ou fuir leur terre Changer d’hémisphère, gare à tous ces setters L'adaptation à cette nation S'est faite à la sueur de leur front (me sing again) Galère! pour trouver des repères Un climat délétère, aujourd'hui plus qu'hier Tant de questions de confusions Être français n'est pas qu'une décision !  Tout ce qu'ils veulent : c'est une France qui ferme sa gueule Une fois de plus la machine est lancée !  Tout ce qu'ils veulent c'est une nation comme idole Une fois de plus la sentence est tombée !  Tout ce qu'on veut c'est se sentir chez soi Face à l'adversité, ici je reste Tu ferme ta porte mais t'es le bienvenue chez moi Mon identité grandit sans cesse !  J'prends sur moi et mes écrits se précisent Encore un texte qui dévoilent vos faiblesses (faiblesses) C'qui émane de vos dires blesse en somme Je les protègent quand on touche aux miens Aussi étranger que quand on me parle de noblesse (noblesse) Et toutes vos lois ne s'appliqueront à personne Tu prends c'qui t'intéresse: l'immigration sélective Tu chantes la Marseillaise comme une sanction punitive Ton identité nationale reste, encore une belle connerie Bien plus qu'une alternative Cesse de nous prendre pour des idiots Ta politique se cache derrière tes mots Cesse de nous prendre pour des idiots !  Tout ce qu'ils veulent : c'est une France qui ferme sa gueule Une fois de plus la machine est lancée !  Tout ce qu'ils veulent c'est une nation comme idole Une fois de plus la sentence est tombée !  Tout ce qu'on veut c'est se sentir chez soi Face à l'adversité, ici je reste Tu ferme ta porte mais t'es le bienvenue chez moi Mon identité grandit sans cesse !  Give me again Give me again Give me again Give me again Tous ce qu'on veut c'est se sentir chez soi Tu fermes ta porte mais t'es le bienvenue chez moi",
      title: "Tout ce qu'ils veulent",
      artist: "Dub Inc"
    }
  }
  render() {
    return (
      <Lyrics lyrics={this.state.lyrics} artist={this.state.artist} title={this.state.title} />
//      <TodoList />
//      <Welcome name="Jean-Mi" />
    );
  }
}

export default App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//     test
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }

//ReactDOM.render(<App />, document.querySelector('#app'));

// export default App;
