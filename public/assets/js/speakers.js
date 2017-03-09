$(function () {

    var speakers = {
        liran : {
            name: 'Liran Tal',

            img : 'assets/liran.png',

            position: 'Web Apps Team Lead <br/>eXelate',
            
            descriptionHtml: '<p>Liran is leading the core team for the MEAN.js JavaScript framework. He recently published Essential Node.js Security and authored other books in Agile, and Web development. Passionate about Open Source since an early age, he is continuously contributing to many projects on GitHub in Node.js, JavaScript, Docker, and Security.</p><p>Being an avid supporter and contributor to the open source movement, in 2007 Liran has redefined network RADIUS management by establishing daloRADIUS, a world-recognized and industry-leading <br/><a href="http://www.daloradius.com" class="text-blue" target="_blank">open source project</a>.</p>',

            social : {
                twitter : "https://twitter.com/liran_tal",
                github : "https://github.com/lirantal",
                website : "https://medium.com/@liran.tal"
            }
        },

        mark : {
            name: 'Mark Dalgleish',

            img : 'assets/mark.jpg',
            
            position: 'DesignOps Lead<br/>SEEK',
            
            descriptionHtml: '<p>Mark Dalgleish is the co-creator of CSS Modules, lead organiser of MelbJS, and DesignOps Lead at SEEK, Australia\'s leading job site. Having got his start with HTML and UI design at a young age, Mark has since developed a love of open source and software engineering but always as a means to creating elegant, usable experiences.</p>',

            social : {
                twitter : "https://twitter.com/markdalgleish",
                github : "https://github.com/markdalgleish",
                website : "#"
            }
        },

        jack : {
            name: 'Jack Franklin',

            img : 'assets/jack.jpg',

            position: 'Senior JavaScript Developer<br/>Songkick',
            
            descriptionHtml: '<p>Jack is a Senior JavaScript Developer at Songkick working on React and Angular applications where he splits his time between new features, refactors and work on optimising builds. If he’s not doing that he’s usually obsessing over his Vim configuration or writing for his blog, <a href="http://javascriptplayground.com/" class="text-blue" target="_blank">JavaScript Playground</a>.</p><p> He’s the author of "Beginning jQuery" (Apress, 2012) and speaks at conferences on all things front-end, including build tools, frameworks and even new languages like Elm.</p>',

            social : {
                twitter : "https://twitter.com/Jack_Franklin",
                github : "https://github.com/jackfranklin",
                website : "http://www.javascriptplayground.com"
            }
        },

        martin : {
            name: 'Martin Splitt',

            img : 'assets/martin.jpg',

            position: 'Senior software engineer<br/>Archilogic',
            
            descriptionHtml: '<p>Open web &amp; open source cheerleader, Google Developer Expert for web technologies, W3C contributor, O\'Reilly Workshop instructor, book author and a good guy with a loud laugh. </p>',

            social : {
                twitter : "https://twitter.com/g33konaut",
                github : "https://github.com/avgp",
                website : "http://50linesofco.de"
            }
        },

        calinescu : {
            name: 'Dan Calinescu',

            img : 'assets/calinescu.jpg',

            position: 'Knowledge Manager<br/>Evozon',

            descriptionHtml: '<p>Developer, writer, educator and father, on a mission to contribute to a future where technology serves humanity - not the other way around. Expert diaper-changer with a ridiculous passion for Open Source.</p>',

            social : {
                twitter : "https://twitter.com/idancali",
                github : "https://github.com/idancali",
                website : "https://medium.com/@idancali"
            }
        },

        filip : {
            name: 'Filip Bech-Larsen',

            img : 'assets/filip.jpeg',

            position: 'Frontend Manager<br/>IMPACT',

            descriptionHtml: '<p>Filip is a frontend developer from Denmark, focusing on delivering great user-experiences to the end-user – often using Angular. He is the Frontend Manager at IMPACT, delivering large-scale commerce-products to well-known business and consumer brands. Filip is passionate about the web, and cares not only about clean and efficient code, but also about accessibility and performance, in order for the web to be available and accessible for everybody - without sacrificing great design and UX. In his local city of Aarhus, Denmark, Filip initiated an angular user group that has grown to become the biggest in the country. Filip is an active community member, and an experienced public speaker, loving to share knowledge and to mentor fellow developers and entrepreneurs. Filip lives in Aarhus, with his wife and two boys, and fluently speaks English and Danish.</p>',

            social : {
                twitter : "https://twitter.com/filipbech",
                github : "https://github.com/filipbech",
                website : "https://filipbech.github.io"
            }
        },

        xavier : {
            name: 'Xavier Cazalot',

            img : 'assets/xavier.jpeg',

            position: 'Consultant, Javascript Engineer',

            descriptionHtml: "<p>I'm passionate about open-source, and I build apps for early-stage startups as an independent developer for a living. I'm also the maintainer of two Apollo-related open-source projects: the Meteor's Apollo integration & Telescope, one of the biggest Meteor open-source app running with React & GraphQL.</p>",

            social : {
                twitter : "https://twitter.com/xav_cz",
                github : "https://github.com/xavcz",
                website : "http://xav.cz"
            }
        },

        cassi : {
            name: 'Cassi Lup',

            img : 'assets/cassi.jpeg',

            position: 'Technical Lead Developer<br/>3Pillar Global',

            descriptionHtml: '<p>Cassi Lup is a Lead Developer with 3Pillar Global and a co-organizer of tim.js (probably the 1st JS Meetup in Romania). He has a passion for the web and tries to look at it with a creative, yet critical eye. He has a knack for all things JS, from trainings and workshops all the way to solving real-life problems with code. When not online, he loves hanging out with his wife and two kids.</p>',

            social : {
                twitter : "https://twitter.com/cassilup",
                github : "https://github.com/cassilup",
                website : "#"
            }
        },

        gautam : {
            name: 'Gautam Arora',

            img : 'assets/gautam.jpeg',

            position: 'Engineering Manager<br/>Conde Nast',

            descriptionHtml: '<p>Gautam is the Engineering Manager at <a href="http://www.cntraveler.com/">Conde Nast Traveler</a>, an organizer of New York JavaScript where he runs NodeSchool NYC, and a self-published author at <a href="http://fullstackjs.com/">FullStack JavaScript</a>.</p>',

            social : {
                twitter : "https://twitter.com/gautam",
                github : "https://github.com/gautamarora",
                website : "http://www.gautamarora.com/"
            }
        },

        soon : {
            name: 'TBA',

            img : 'assets/images/soon.png',

            position: '',

            descriptionHtml: '<p></p><br/>',

            social : {
                twitter : "#",
                github : "#",
                website : "http://www.jsheroes.io/"
            }
        }
    };

    const speakerInfoModalTempalte = function (speaker) {
        return `
        <div id="speaker-info" class="modal fade" role="dialog">
            <div class="modal-dialog"> 
                <div class="modal-close-button" data-dismiss="modal" aria-label="Close"><i class="fa fa-window-close-o"></i></div>
                <!-- Modal content-->
                <div class="modal-content padding_4x4_40">
                <div class="speaker-sec">
                    <div class="speaker-aside">
                    <div class="speaker-info-box text-center border-box">
                        <div class="spearker-img"> <img src="${speaker.img}" alt="" class="img-responsive center-block"> </div>
                    </div>
                    <div>
                        <h5 class="speaker-name"><a href="${speaker.social.website}" class="text-blue">${speaker.name}</a></h5>
                        <h6 class="speaker-role">${speaker.position}</h6>
                        <div class="social-links"> 
                            <a href="${speaker.social.twitter}"><i class="fa fa-twitter" aria-hidden="true"></i></a> 
                            <a href="${speaker.social.github}"><i class="fa fa-github" aria-hidden="true"></i></a> 
                            <a href="${speaker.social.website}"><i class="fa fa-link" aria-hidden="true"></i></a> 
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