const FAKE_DESCRIPTION_STRING =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In possimus facere delectus nulla perspiciatis obcaecati corrupti. Accusantium repudiandae labore ratione. Tempore, natus asperiores quam ab molestiae magni et placeat tempora, fuga voluptatem alias cumque explicabo repudiandae nemo labore iusto, adipisci at hic? Incidunt expedita aut modi itaque sequi fugit similique aliquam consectetur tempore saepe veniam nesciunt ullam eum odio deserunt atque cum iure aperiam obcaecati, earum eligendi corporis totam laborum quisquam. Corrupti quasi eaque recusandae tempore minus nisi illum dolore! Porro amet nam, eos earum blanditiis ad vel corporis officia itaque quisquam iure dolorum ducimus esse ea autem dignissimos, quidem, unde ullam quam nihil atque nisi. Animi atque nesciunt recusandae magni ut minus, odio ex similique enim dolore architecto, alias itaque unde culpa! Magnam recusandae itaque, aliquam voluptatem corporis quisquam, quasi, facilis odio accusamus deleniti nemo ipsa suscipit! Vel voluptatem in ipsa similique recusandae inventore deleniti officiis eligendi harum voluptatum?";

function random(max = 1, min = 0) {
  return Math.random() * (max - min) + min;
}

export function mockDescription() {
  const start = Math.floor(random(FAKE_DESCRIPTION_STRING.length));
  const end = Math.floor(random(FAKE_DESCRIPTION_STRING.length, start));

  const description = FAKE_DESCRIPTION_STRING.slice(start, end);
  return description;
}
