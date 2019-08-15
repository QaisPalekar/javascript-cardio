const accum = (s) => {
	return [...s.toLowerCase()]
      .map((char, key) => [ char.toUpperCase(),...Array(key).fill(char) ].join(''))
      .join('-')
      
}

console.log(accum('sdweSF'));