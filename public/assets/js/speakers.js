$(function () {

    var speakers = {
        liran : {
            name: 'Liran Tal',

            img : 'assets/liran.png',

            position: 'Web Apps Team Lead </br>eXelate',
            
            descriptionHtml: '<p>Liran is leading the core team for the MEAN.js JavaScript framework. He recently published Essential Node.js Security and authored other books in Agile, and Web development. Passionate about Open Source since an early age, he is continuously contributing to many projects on GitHub in Node.js, JavaScript, Docker, and Security.</p><p>Being an avid supporter and contributor to the open source movement, in 2007 Liran has redefined network RADIUS management by establishing daloRADIUS, a world-recognized and industry-leading <br/><a href="http://www.daloradius.com">open source project</a>.</p>',

            social : {
                twitter : "https://twitter.com/liran_tal",
                github : "https://github.com/lirantal",
                website : "https://medium.com/@liran.tal"
            }
        },

        mark : {
            name: 'Mark Dalgleish',

            img : 'assets/mark.jpg',
            
            position: 'DesignOps Lead</br>SEEK',
            
            descriptionHtml: '<p>Mark Dalgleish is the co-creator of CSS Modules, lead organiser of MelbJS, and DesignOps Lead at SEEK, Australia\'s leading job site. Having got his start with HTML and UI design at a young age, Mark has since developed a love of open source and software engineering but always as a means to creating elegant, usable experiences.</p>',

            social : {
                twitter : "https://twitter.com/markdalgleish",
                github : "https://github.com/markdalgleish",
                website : "http://markdalgleish.com"
            }
        },

        jack : {
            name: 'Jack Franklin',

            img : 'assets/jack.jpg',

            position: 'Senior JavaScript Developer</br>Songkick',
            
            descriptionHtml: '<p>Jack is a Senior JavaScript Developer at Songkick in London where he spends most of his time writing or talking about JavaScript, React and Elm.</p>',

            social : {
                twitter : "https://twitter.com/Jack_Franklin",
                github : "https://github.com/jackfranklin",
                website : "http://www.javascriptplayground.com"
            }
        },

        martin : {
            name: 'Martin Splitt',

            img : 'assets/martin.jpg',

            position: 'Senior software engineer</br>Archilogic',
            
            descriptionHtml: '<p>Open web &amp; open source cheerleader, Google Developer Expert for web technologies, W3C contributor, O\'Reilly Workshop instructor, book author and a good guy with a loud laugh. </p>',

            social : {
                twitter : "https://twitter.com/g33konaut",
                github : "https://github.com/avgp",
                website : "http://50linesofco.de"
            }
        },

    }

    const speakerInfoModalTempalte = function (speaker) {
        return `
        <div id="speaker-info" class="modal fade" role="dialog">
            <div class="modal-dialog"> 
                <!-- Modal content-->
                <div class="modal-content padding_4x4_40">
                <div class="speaker-sec">
                    <div class='speaker-aside'>
                    <div class="speaker-info-box text-center border-box">
                        <div class="spearker-img"> <img src="${speaker.img}" alt="" class="img-responsive center-block"> </div>
                    </div>
                    <div>
                        <h5 class="speaker-name"><a href="${speaker.social.website}">${speaker.name}</a></h5>
                        <h6 class='speaker-role'>${speaker.position}</h6>
                        <div class="social-links"> 
                            <a href="${speaker.social.twitter}"><i class="fa fa-twitter-square" aria-hidden="true"></i></a> 
                            <a href="${speaker.social.github}"><i class="fa fa-github-square" aria-hidden="true"></i></a> 
                            <a href="${speaker.social.website}"><i class="fa fa-external-link-square" aria-hidden="true"></i></a> 
                        </div>
                    </div>
                    </div>

                    <div class="speaker-description">
                    ${speaker.descriptionHtml}
                    </div>
                </div>
                </div>
            </div>
            </div>
        `
    }

    $('#speakers').on('click', '.speaker-hover', function (event) {
        var target = $(event.target).closest('.speaker-info-box').find('.spearker-img')
        var speakerId = target[0].dataset && target[0].dataset.speaker
        var content 

        if ( speakerId ) {
            content = $(speakerInfoModalTempalte(speakers[speakerId]))    
            content.modal().on('hide.bs.modal', function () {
                content.remove()
            })
        }
    })
})