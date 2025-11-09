import Home from '../page'
 
it('renders homepage unchanged', () => {
  const component = Home({
    searchParams: Promise.resolve({
      search: "",
      status: "",
      gender: "",
    }),
  })
  expect(component).toMatchSnapshot()
})