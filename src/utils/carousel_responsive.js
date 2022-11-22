export const responsive_normal = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide:8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300},
      items: 8,
      slidesToSlide:8
    },
    tablet: {
      breakpoint: { max: 1200, min: 700 },
      items: 4,
      slidesToSlide:4
    },
    // minitablet: {
    //   breakpoint: { max: 700, min: 464 },
    //   items: 3,
    //   slidesToSlide:3 
    // },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 2,
      slidesToSlide: 2
    }
  };

  export const responsive_large = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide:10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide:10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide:10
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide:10
    }
  }