import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  sinopse: string;
  resumo: string;
  linkcapa: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public sinopses: Message[] = [
    {
      fromName: 'Pânico',
      subject: 'Billy Loomis',
      date: '1996',
      id: 0,
      read: false,
      sinopse: 'Meu favorito e até que antigo.',
      resumo: 'Filme que começa com uma Stacey, um nerd, o namorado da Stacey e algum esteriótipo forçado que vão se mter onde não devem, passam a ser perseguidos por algum maluco, descobrem umas coisas estranhas e a maioria morre até o final, inclusive o assassino que é revelado na verdade estar vivo (pelo menos uma vez).',
      linkcapa: 'assets/capas/panico.jpg'
    },

    {
      fromName: 'Halloween',
      subject: 'Michael Myers',
      date: '1978',
      id: 1,
      read: false,
      sinopse: 'Esse até que é especial para mim. Myers fez difrença na minha vida.',
      resumo: 'Filme que começa com uma Stacey, um nerd, o namorado da Stacey e algum esteriótipo forçado que vão se mter onde não devem, passam a ser perseguidos por algum maluco, descobrem umas coisas estranhas e a maioria morre até o final, inclusive o assassino que é revelado na verdade estar vivo (pelo menos uma vez).',
      linkcapa: 'assets/capas/halloween.jpg'
    },
    {
      fromName: 'Sexta-Feira 13: Parte 2',
      subject: 'Jason Voorhees',
      date: '1981',
      id: 2,
      read: false,
      sinopse: 'Sabia que o assassino do primeiro filme é a mãe do Jason, e não ele?',
      resumo: 'Filme que começa com uma Stacey, um nerd, o namorado da Stacey e algum esteriótipo forçado que vão se mter onde não devem, passam a ser perseguidos por algum maluco, descobrem umas coisas estranhas e a maioria morre até o final, inclusive o assassino que é revelado na verdade estar vivo (pelo menos uma vez).',
      linkcapa: 'assets/capas/sf13.jpg'
    },
    {
      fromName: 'Hora do Pesadelo',
      subject: 'Freddy Krueger',
      date: '1984',
      id: 3,
      read: false,
      sinopse: '"EU SOU SEU NAMORADO AGORA, NANCY!"',
      resumo: 'Filme que começa com uma Stacey, um nerd, o namorado da Stacey e algum esteriótipo forçado que vão se mter onde não devem, passam a ser perseguidos por algum maluco, descobrem umas coisas estranhas e a maioria morre até o final, inclusive o assassino que é revelado na verdade estar vivo (pelo menos uma vez).',
      linkcapa: 'assets/capas/hdp.jpg'
    },
    {
      fromName: 'Ringu',
      subject: 'Yamamura Sadako',
      date: '1998',
      id: 4,
      read: false,
      sinopse: 'Sete dias, mas o que acontece se você deixar a tela da TV encostada no chão?',
      resumo: 'A garotinha morta assombrando pessoas é clichê... mas o filme, nem tanto.',
      linkcapa: 'assets/capas/ringu.jpg'
    },
    {
      fromName: 'Alien: O Oitavo Passageiro',
      subject: 'Xenomorfo',
      date: '1979',
      id: 5,
      read: false,
      sinopse: 'JONES!',
      resumo: 'Alien inovou o cinema com terror espacial. O medo do desconhecido sempre foi reconhecido, mas aqui não há medo de um mascarado que o protagonista não sabe quem é ou quando pode atacar - mas sim de uma criatura desconhecida que pode estar atrás de você.',
      linkcapa: 'assets/capas/alien.jpg'
    },
    {
      fromName: 'Jogos Mortais',
      subject: 'Jigsaw',
      date: '2005',
      id: 6,
      read: false,
      sinopse: "Lições importantes sobre valorizar a (própria) vida",
      resumo: 'Um velho sem o que fazer sequestra drogados, viciados, suicidas e outros para jogarem "jogos" em que precisam cortar membros, matar e ter extrema frieza para sobreviver... tudo isso para valorizarem a vida. Esse velho não tinha mais o que fazer?',
      linkcapa: 'assets/capas/jm.jpg'
    },
    {
      fromName: 'Massacre da Serra Elétrica',
      subject: 'Os Sawyer',
      date: '1974',
      id: 7,
      read: false,
      sinopse: 'VRRRRRR VRRRRRRR VRRRRRDANRANRANRANRANRARNARANRANARNARN',
      resumo: 'Filme que começa com uma Stacey, um nerd, o namorado da Stacey e algum esteriótipo forçado que vão se mter onde não devem, passam a ser perseguidos por algum maluco, descobrem umas coisas estranhas e a maioria morre até o final, inclusive o assassino que é revelado na verdade estar vivo (pelo menos uma vez).',
      linkcapa: 'assets/capas/mdse.jpg'
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.sinopses;
  }

  public getMessageById(id: number): Message {
    return this.sinopses[id];
  }

}
