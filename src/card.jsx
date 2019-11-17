import React from 'react';

const Curso = () => (
    <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png" alt="instructor" />
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
              Curos de Figma desde Cero
            </h3>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img src="https://api.ed.team/files/avatars/18a0441b-8357-488f-a461-21d07260f46a.jpg" alt="imagen" />
              </div>
                  </div>
                  <span className="small">Alvaro Felipe</span>
                </div>
              </div>
              <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="/">$ 20USD</a>
              </div>
            </div>
    </article>
)

export default Curso;

