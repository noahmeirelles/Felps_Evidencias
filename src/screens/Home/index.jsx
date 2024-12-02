import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
      
        <View style={styles.square}>
          <Text style={styles.title}>Climbing</Text>
          <Text style={styles.text}>A escalada é uma prática esportiva que envolve a subida de superfícies verticais ou inclinadas, utilizando as mãos, os pés e, em alguns casos, equipamentos auxiliares. Essa atividade pode ser realizada em ambientes naturais, como montanhas e rochas, ou em estruturas artificiais, como paredes de escalada indoor. A escalada é considerada tanto um desafio físico quanto mental, exigindo do praticante habilidades como força, flexibilidade, resistência, estratégia e foco. Ela tem ganhado popularidade nos últimos anos, com diferentes modalidades e competições, além de ser uma atividade ao ar livre que proporciona contato com a natureza e superação pessoal.

            Escalada em Rocha
            A escalada em rocha é uma das modalidades mais tradicionais e desafiadoras do esporte. Ela é realizada em formações rochosas naturais, como falésias, montanhas e penhascos. Cada percurso ou "roteiro" de escalada é único, com características como diferentes tipos de presas (apoios para as mãos e os pés) e o grau de dificuldade do terreno, que varia de fácil a extremamente técnico.

            A escalada em rocha pode ser praticada de diversas formas, incluindo:

            Escalada esportiva, onde o escalador utiliza cordas e equipamentos de segurança (como mosquetões e cadeirinhas) para percorrer rotas mais longas e difíceis.
            Boulder, que são escaladas em rochas de altura menor, sem o uso de cordas, mas com colchões de proteção no chão para garantir a segurança em quedas.
            Escalar em rocha exige não só condicionamento físico, mas também um bom conhecimento das técnicas de escalada, como o uso eficiente das presas, movimentação do corpo e controle da respiração. Além disso, a escalada em rocha demanda atenção redobrada à segurança, pois as condições do terreno podem ser imprevisíveis.

            Escalada em Competição
            Além da escalada em ambientes naturais, a escalada esportiva também é realizada em competições. A escalada competitiva tem se tornado cada vez mais popular, principalmente após sua inclusão como esporte olímpico nos Jogos de Tóquio 2020. Nesses eventos, os atletas são desafiados em diferentes tipos de provas, que podem incluir:

            Dificuldade: O objetivo aqui é escalar o mais alto possível em uma parede de escalada pré-determinada dentro de um tempo limitado. O escalador recebe pontos conforme o grau de dificuldade que consegue alcançar.
            Boulder: Os atletas enfrentam blocos de rocha artificiais (geralmente com 4 a 5 metros de altura) e devem completar o percurso sem cair. Não são usadas cordas, e o foco é em força e técnica para alcançar a linha de chegada.
            Velocidade: Nesta prova, os competidores escalam uma parede padrão, com o objetivo de atingir o topo no menor tempo possível. A velocidade e a precisão são cruciais para o sucesso.
            As competições são realizadas em paredes artificiais, equipadas com presas de rocha feitas de materiais como resina, que imitam as naturais. Essas paredes são projetadas para oferecer uma variedade de desafios, tanto em termos de dificuldade quanto em termos de estilo de escalada.

            Em competições de escalada, a preparação física e mental dos atletas é fundamental. Eles precisam de força, resistência, agilidade e, acima de tudo, uma estratégia para superar as rotas propostas de forma eficaz. Além disso, habilidades psicológicas como foco, concentração e controle de nervos são essenciais para o desempenho em alta pressão.

            Conclusão
            A escalada, seja em rocha ou em competições, é uma prática que exige dedicação, técnica e respeito à segurança. Ela proporciona uma forma única de exercício físico e mental, estimulando o autoconhecimento e a superação pessoal. A escalada em rocha oferece um contato direto com a natureza, enquanto as competições trazem uma dimensão de desafio técnico e mental em um ambiente controlado. Com o crescente interesse pelo esporte, tanto amadores quanto profissionais têm encontrado na escalada uma atividade que combina aventura, adrenalina e uma busca constante por evolução.</Text>
        </View>
      </ScrollView>
    </View>
  );
}
