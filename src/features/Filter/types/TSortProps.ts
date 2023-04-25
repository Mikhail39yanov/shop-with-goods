export type TSortProps = {
  refSort?: React.RefObject<HTMLUListElement>
  handleSortRating?: (event: React.SyntheticEvent) => void
  handleSortDown?: (event: React.SyntheticEvent) => void
  handleSortUP?: (event: React.SyntheticEvent) => void
}
