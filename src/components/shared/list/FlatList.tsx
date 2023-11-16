interface FlatListProps<T> {
  containerClass?: string
  itemClass?: string
  data: T[]
  renderItem: (item: T) => React.ReactNode
  keyExtractor: (item: T) => string
}

function FlatList<T>({
  containerClass = "",
  itemClass = "",
  data,
  renderItem,
  keyExtractor,
}: FlatListProps<T>) {
  return (
    <div className={containerClass}>
      {data?.map((item) => (
        <div className={itemClass} key={keyExtractor(item)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  )
}

export default FlatList
