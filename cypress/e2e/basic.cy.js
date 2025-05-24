describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the resources text', () => {
    // cy.get('h2')
    // .contains('「ShuShu」是一款聚合海量影视资源的App, 提供电影、电视、综艺、动漫等视听内容，支持演员作品查询，通过智能算法推荐精准匹配观影偏好');
  })
  it('renders the image', () => {
    // cy.get('img')
    // .should('be.visible')
    // .and(($img) => {
    //   expect($img[0].naturalWidth).to.be.greaterThan(0);
    // })
  })
})