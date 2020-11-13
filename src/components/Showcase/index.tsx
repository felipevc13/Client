import * as S from './styles'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider, { GameCardSliderProps } from 'components/GameCardSlider'

export type GamesColor = Pick<GameCardSliderProps, 'color'>

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  gamesColor?: GamesColor
}

const Showcase = ({ title, highlight, games, gamesColor }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={gamesColor!} />}
  </S.Wrapper>
)

export default Showcase
