import React from 'react';

export default function Footer(props: { onReadMoreClick: () => void }): JSX.Element {
    return (
        <footer className={'footer stitch-footer'}>
            <div className="content has-text-centered ">
                <div className='level is-mobile'>
                    <div className='level-item is-2-desktop is-offset-4-desktop has-text-right has-text-grey is-justify-content-flex-end'>
                        <div className="content">
                            A <strong className="has-text-grey">demo</strong> by Stitch
                        </div>
                    </div>
                    <div className='level-item is-2-desktop has-text-left stitch-footer-text-subtle is-justify-content-flex-start'>
                        <div className="content">
                            <a className='stitch-footer-text-orange' href="#" onClick={props.onReadMoreClick}>
                                Learn more
                            </a><span> | </span><a className='stitch-footer-text-orange' href="https://github.com/Stitch-Money/Mars-Financial">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
