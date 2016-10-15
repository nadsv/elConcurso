import { ElConcursoPage } from './app.po';

describe('el-concurso App', function() {
  let page: ElConcursoPage;

  beforeEach(() => {
    page = new ElConcursoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
