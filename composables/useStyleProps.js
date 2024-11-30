export default function useStyleProps(props) {
  const format = (value) => {
    return typeof value === 'string' ? value :
      typeof value === 'number' ? value + 'px' : null;
  }

  const style = computed(() => {
    return {
      width: format(props.width),
      height: format(props.height),
      marginTop: format(props.top),
      marginBottom: format(props.bottom),
    }
  });

  return style;
}