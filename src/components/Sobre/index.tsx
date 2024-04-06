import {
  Box,
  BoxDivider,
  Container,
  Content,
  Divider,
  Job,
  Name,
  Paragraph,
  Texts,
  Image,
  BoxText,
  TopText,
  ImageMobile,
} from "./styles";

export function Sobre() {
  return (
    <Container>
      <Content>
        <Divider>
          <img
            src="https://s3-alpha-sig.figma.com/img/31d1/18c4/158d0aa26fba0b758fadd5a3eb1de1a4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=omt1NQWOSOMVFB-vqegrlF5cewS80J3VpAPil6Bp-qEbSddmJgKWRm9E5FVvLGb5R80qK6ZdFkZcXnvHlxIPl88IjhKrQkH1M5BYDUOKnJlLvLETR3USeUxpZCqTEdUpa4gm7PDkwDohYe1X50mmmTxD~yP-TvArQ7y~jlJR-f0BJ5HVRJBG2j9M10cUo9F9LbK7Z2NbxKdJON-2GBKpEexaOybbU4YfY8-gkQthub0U7676lVsJaoP5NwSdovRz-mY~mzsVcoz8f9yZIKlVADTtiECkhGuznIQyiAEkCCeOozr-XXCPftHlkLYKw07h2~PV8wVDcZSnKbP~dcOc7Q__"
            alt=""
          />
        </Divider>

        <h1>
          QUEM É <span>MEU MENTOR?</span>
        </h1>
        <ImageMobile>
          <img src="sobremobile.png" alt="" />
          <div className="shadow"></div>
        </ImageMobile>
        <Box>
          <Image>
            <img src="sobredesktop.png" alt="" />
          </Image>
          <BoxText>
            <TopText>
              <div>
                <Name>ALEXANDRE SILVA</Name>
                <Job>CEO, Nutricionista</Job>
              </div>
              <BoxDivider />
            </TopText>
            <Texts>
              <Paragraph>
                Alexandre Silva seguiu sua paixão pelos esportes e boa forma e
                se formou em Nutrição em 2021.
              </Paragraph>
              <Paragraph>
                Começou do zero, atendendo na sala da casa de seus pais, em uma
                cidade bem pequena do interior paulista. Porém, desenvolveu um
                método próprio que o levou a se tornar um grande empresário da
                região, investidor e referência em pouco tempo.
              </Paragraph>
              <Paragraph>
                Hoje sua marca está presente em mais de 10 países, com 3
                consultórios no estado de São Paulo, e, atendendo a pedidos de
                colegas da área, desenvolveu a Mentoria Consultório Prime, onde
                compartilha, passo a passo, toda a trilha de sucesso traçada até
                aqui, um negócio sólido e próspero.
              </Paragraph>
              <Paragraph>
                Estrategista de negócios, com o empreendedorismo em seu DNA,
                Alexandre tem como meta ajudar Nutricionistas de todo o país não
                só a viverem de seu consultório, mas também de terem a chance de
                desfrutar de uma vida acima da média.
              </Paragraph>
            </Texts>
          </BoxText>
        </Box>
      </Content>
    </Container>
  );
}
