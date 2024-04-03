import { Column, Columns, Container, Content, Divider, Item } from "./styles";

export function Historia() {
  return (
    <Container>
      <Content>
        <h1>
          HISTÓRIAS DE SUCESSO UTILIZANDO A{" "}
          <span>METODOLOGIA DE ATENDIMENTO PRIME</span>
        </h1>
        <Divider>
          <img
            src="https://s3-alpha-sig.figma.com/img/31d1/18c4/158d0aa26fba0b758fadd5a3eb1de1a4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=omt1NQWOSOMVFB-vqegrlF5cewS80J3VpAPil6Bp-qEbSddmJgKWRm9E5FVvLGb5R80qK6ZdFkZcXnvHlxIPl88IjhKrQkH1M5BYDUOKnJlLvLETR3USeUxpZCqTEdUpa4gm7PDkwDohYe1X50mmmTxD~yP-TvArQ7y~jlJR-f0BJ5HVRJBG2j9M10cUo9F9LbK7Z2NbxKdJON-2GBKpEexaOybbU4YfY8-gkQthub0U7676lVsJaoP5NwSdovRz-mY~mzsVcoz8f9yZIKlVADTtiECkhGuznIQyiAEkCCeOozr-XXCPftHlkLYKw07h2~PV8wVDcZSnKbP~dcOc7Q__"
            alt=""
          />
        </Divider>
        <Columns>
          <Column>
            <Item>
              <img src="dep1.png" alt="" />
            </Item>
            <Item>
              <img src="dep2.png" alt="" />
            </Item>
            <Item>
              <img src="dep3.png" alt="" />
            </Item>
          </Column>
          <Column>
            <Item>
              <img src="dep4.png" alt="" />
            </Item>
            <Item>
              <img src="dep5.png" alt="" />
            </Item>
          </Column>
          <Column>
            <Item>
              <img src="dep6.png" alt="" />
            </Item>
            <Item>
              <img src="dep7.png" alt="" />
            </Item>
          </Column>
        </Columns>
      </Content>
    </Container>
  );
}
