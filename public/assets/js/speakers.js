$(function () {

    var speakers = {
        liran : {
            name: 'Liran Tal',

            img : 'assets/liran.png',

            position: 'Engineering Manager<br/>Marketing Cloud, Nielsen',
            
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

        // jack : {
        //     name: 'Jack Franklin',
        //
        //     img : 'assets/jack.jpg',
        //
        //     position: 'Senior JavaScript Developer<br/>Songkick',
        //
        //     descriptionHtml: '<p>Jack is a Senior JavaScript Developer at Songkick working on React and Angular applications where he splits his time between new features, refactors and work on optimising builds. If he’s not doing that he’s usually obsessing over his Vim configuration or writing for his blog, <a href="http://javascriptplayground.com/" class="text-blue" target="_blank">JavaScript Playground</a>.</p><p> He’s the author of "Beginning jQuery" (Apress, 2012) and speaks at conferences on all things front-end, including build tools, frameworks and even new languages like Elm.</p>',
        //
        //     social : {
        //         twitter : "https://twitter.com/Jack_Franklin",
        //         github : "https://github.com/jackfranklin",
        //         website : "http://www.javascriptplayground.com"
        //     }
        // },

        martin : {
            name: 'Martin Splitt',
            img : 'assets/martin.jpg',
            position: 'Senior Software Engineer<br/>Archilogic',
            descriptionHtml: '<p>Open web &amp; open source cheerleader, Google Developer Expert for web technologies, W3C contributor, O\'Reilly Workshop instructor, book author and a good guy with a loud laugh. </p>',
            social : {
                twitter : "https://twitter.com/g33konaut",
                github : "https://github.com/avgp",
                website : "http://50linesofco.de"
            }
        },
        calinescu : {
            name: 'Dan Călinescu',
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
            img : 'assets/filip.jpg',
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
            position: 'Software Engineer<br/>OK GROW!',
            descriptionHtml: "<p>I'm passionate about open-source, and I build apps for early-stage startups as an independent developer for a living. I'm also the maintainer of two Apollo-related open-source projects: the Meteor's Apollo integration & Telescope, one of the biggest Meteor open-source app running with React & GraphQL.</p>",
            social : {
                twitter : "https://twitter.com/xav_cz",
                github : "https://github.com/xavcz",
                website : "https://xaviercazalot.com/"
            }
        },

        cassi : {
            name: 'Cassi Lup',
            img : 'assets/cassi.jpg',
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
            position: 'Developer Evangelist<br/>Conde Nast',
            descriptionHtml: '<p>Gautam is a Developer Evangelist at <a href="http://www.condenast.com/" target="_blank">Conde Nast</a>, an organizer of New York JavaScript where he runs NodeSchool NYC, and a self-published author at <a href="http://fullstackjs.com/" target="_blank">FullStack JavaScript</a>.</p>',
            social : {
                twitter : "https://twitter.com/gautam",
                github : "https://github.com/gautamarora",
                website : "http://www.gautamarora.com/"
            }
        },

        rauch : {
            name: 'Guillermo Rauch',
            img : 'assets/GuillermoRauch.jpg',
            position: 'Founder and CEO<br/>Zeit',
            descriptionHtml: '<p>Guillermo is the founder of <a href="https://zeit.co/" target="_blank">zeit.co</a>, whose mission is to make cloud deployment simple, global and real time. He founded two startups previously: LearnBoost and CloudUp. He`s the creator of several popular Node.JS open source libraries like <a href="https://socket.io/" target="_blank">socket.io</a>, <a href="http://mongoosejs.com/" target="_blank">mongoose</a> and <a href="https://github.com/rauchg/slackin" target="_blank">slackin</a>. Prior to Node.JS, he was a core developer of the <a href="https://mootools.net/" target="_blank">MooTools</a> frontend toolkit. He’s a JSConf.ar curator, open source enthusiast and blogger</p>',
            social : {
                twitter : "https://twitter.com/rauchg",
                github : "https://github.com/rauchg",
                website : "https://rauchg.com/"
            }
        },
      moldovan : {
        name: 'Alex Moldovan',
        img : 'assets/AlexMoldovan.jpg',
        position: 'Full Stack Engineer<br/>Fortech',
        descriptionHtml: '<p>Coder, blogger and tech enthusiast in general, passionate about JavaScript and Functional Programming, Alex is always happy to talk about coding and software development in general. He is a huge militant for clean code and teaching people core programming skills and paradigms. Currently he works as a full stack developer splitting his time between JavaScript and Ruby but outside work, he`s a big promoter of open source software and communities, as he`s co-organizing Cluj JavaScripters.</p>',
        social : {
          twitter : "https://twitter.com/alexnmoldovan",
          github : "https://github.com/alexnm",
          website : "https://medium.com/@alexnm"
        }
      },
      roxana : {
        name: 'Roxana Rugină',
        img : 'assets/RoxanaRugina.jpg',
        position: 'CEO and Founder<br/>Simplon Romania',
        descriptionHtml: '<p>Roxana is a technologist and communication expert engaged in social and disruptive innovation, passionate about future technologies, entrepreneurship and innovation in education. Her working experience with NGOs, international companies, governmental institutions, agencies and startups brought her to Simplon.co France where she learned Ruby & Ruby on Rails for 6 months. After 10 years of experience in web, marketing, education and communication,  she wants to help more people to learn how to code, develop digital & entrepreneurial skills to solve real problems with long term positive impact on societies.</p>',
        social : {
          twitter : "https://twitter.com/RoxanaRugina",
          // github : "https://www.linkedin.com/in/roxanarugina",
          github : "#",
          website : "http://ro.simplon.co/"
        }
      },
      william : {
        name: 'William Blankenship',
        img : 'assets/WillBlackenship.png',
        position: 'Senior Software Engineer<br/>Netflix',
        descriptionHtml: '<p>Will is a high-school dropout turned recent college graduate. During college, he founded OpenSpace, a hackerspace collaborating with the local school district to give the region access to technology. He was also the chair of the college`s chapter of the Association of Computing Machinery, organized an undergraduate research symposium for Saint Louis Area, and helped organize HackSI, an all-ages hackathon in the Southern Illinois region. His professional shenanigans include working for Boeing and NodeSource. Currently, Will is an independent contractor specializing in Node.js software development and Docker based infrastructure.</p>',
        social : {
          twitter : "https://twitter.com/retrohack3r",
          github : "https://github.com/retrohacker",
          website : "http://will.blankenship.io/"
        }
      },
      carlos : {
        name: 'Carlos Justiniano',
        img : 'assets/carlos-bw.jpg',
        position: 'Chief Architect<br/>Flywheel Sports',
        descriptionHtml: '<p>Veteran software developer, <a href="http://www.guinnessworldrecords.com/world-records/largest-networked-chess-computer/" target="_blank">world record holder</a> and author. Currently Chief Architect at Flywheel Sports - NYC. Founder and Organizer of the <a href="https://www.meetup.com/NYC-JavaScript-Flatiron/" target="_blank">NYC JavaScript @ Flatiron group</a>. Founder and core committer on the <a href="https://www.npmjs.com/package/hydra" target="_blank">Hydra open source project</a> for building NodeJS Microservices.</p>',
        social : {
          twitter : "https://twitter.com/cjus",
          github : "https://github.com/cjus",
          website : "http://cjus.me"
        }
      },
      nir : {
        name: 'Nir Kaufman',
        img : 'assets/NirKaufman.png',
        position: 'Head of Angular Development<br/>500Tech',
        descriptionHtml: '<p>Google Developer Expert (GDE - web technologies, Angular), worldwide conference speaker, Angular evangelist and community activist. Currently acting as the head of Angular department at 500Tech - a top front-end consultancy. Nir organizes the largest Angular community in Israel (Angular-IL), talk and teach about front-end technologies around the world and an organizer of AngularUP conference.</p>',
        social : {
          twitter : "https://twitter.com/nirkaufman",
          github : "https://github.com/nirkaufman",
          website : "http://500tech.com/"
        }
      },
      gagyi : {
        name: 'Benedek Gagyi',
        img : 'assets/BenedekGagyi.jpg',
        position: 'Senior Software Engineer<br/>LogMeIn',
        descriptionHtml: '<p>Developer, teacher, sports-fanatic. When he`s not working on simplifying online collaboration at join.me by LogMeIn, he`s researching the patterns and algorithms connecting basketball, trail running, and drums. His devotion for impeccable user interfaces is rivaled only by his constant search for the perfect brew of Chinese green tea. Benedek is also one of the organizers of the Budapest AngularJS community.</p>',
        social : {
          twitter : "https://twitter.com/BenedekGagyi",
          github : "#",
          website : "#"
        }
      },
      gergely : {
        name: 'Tudor Gergely',
        img : 'assets/gergely.jpg',
        position: 'Fullstack developer<br/>Catalysts',
        descriptionHtml: '<p>Passionate about programming since he was a kid, Tudor is never bored to talk about computers and software. Nowadays he spends his time learning new things and helping others reach their full potential. Never saying no to a challenge, Tudor co-organizes Cluj Javascripters, promoting free learning and open source.</p>',
        social : {
          twitter : "#",
          github : "https://github.com/tudorgergely",
          website : "#"
        }
      },
      salnikov : {
        name: 'Maxim Salnikov',
        img : 'assets/maximsalnikov.png',
        position: 'UI Engineer<br/>ForgeRock',
        descriptionHtml: '<p>Maxim Salnikov is Oslo-based Web UI Engineer, a Google Developer Expert in Web Technologies and Angular. He develops complex web applications since the end of the last century and has extensive experience with all aspects of web front-end: UX/UI prototyping, HTML/CSS/JS, main frameworks, progressive web apps. Maxim is a founder and active contributor to two conferences: Mobile Era and ngVikings - Nordics’ main conferences for mobile and Angular developers respectively. Also, he leads Norway’s largest meetups dedicated to web front-end and mobile: Framsia, Angular Oslo, Mobile Meetup Oslo. Maxim is passionate about sharing his web front-end experience and knowledge with the community. He travels extensively for visiting developers events and speaking/training at conferences and meetups around the world.</p>',
        social : {
          twitter : "https://twitter.com/webmaxru",
          github : "https://github.com/webmaxru",
          website : "#"
        }
      },
      chereches : {
        name: 'Ovidiu Cherecheș',
        img : 'assets/chereches.png',
        position: 'React & JS Consultant',
        descriptionHtml: '<p>Ovidiu is a React & JS consultant. Previously Engineering Manager at [Hootsuite], leading the UI development of the Analytics product. Before that, he`s helped build countless web experiences working with startups, agencies and large organizations.</p><p>He spends most of his time creating user interfaces and open source software, such as [React Cosmos] and [Illustrated Algorithms]. He`s also founded the React.js Bucharest community, where he hosted a number of meetups and hackathons.</p>',
        social : {
          twitter : "https://twitter.com/skidding",
          github : "https://github.com/skidding",
          website : "https://ovidiu.ch"
        }
      },
      pavithra : {
        name: 'Pavithra Kodmad',
        img : 'assets/pavithra.png',
        position: 'UI Engineer<br/>Flipkart.com',
        descriptionHtml: '<p>Pavithra is a Bangalore based Web UI developer. She has been building web applications of various description from the past 6 years. She is a JS framework junkie who has written production applications in Backbone, Ember, Angular and now, React. She likes to participate in welcoming open source communities and is particularly interested in front-end developer tools. She listens to classic rock and loves to watch anime movies.</p>',
        social : {
          twitter : "https://twitter.com/PKodmad",
          github : "https://github.com/pksjce",
          website : "https://pksjce.github.io"
        }
      },
      ronodi : {
        name: 'Robert Onodi',
        img : 'assets/ronodi.png',
        position: 'Software Architect<br/>Evozon',
        descriptionHtml: '<p>Robert is currently a Software Architect at Evozon, but has been writing code past a decade. He is passionate about JavaScript, application architectures and mentoring. Beside the daily programming routines, he is also a trainer at Scoala Informala de IT, in Cluj-Napoca, a speaker at serveral JS related conferences and finally a writer both on his blog and <a href="https://www.packtpub.com/web-development/mean-blueprints" target="_blank">traditional hardcover.</a></p>',
        social : {
          twitter : "https://twitter.com/robertonodi",
          github : "https://github.com/robert52",
          website : "http://robertonodi.me"
        }
      },
      vladimir : {
        name: 'Vladimir Porton',
        img : 'assets/vladimir.png',
        position: 'Senior React & React Native developer<br/>500Tech',
        descriptionHtml: '<p>Israel-based Front-End and React Native developer at 500Tech. Worked on tens of projects using Angular, React and React Native. </a></p>',
        social : {
          twitter : "#",
          github : "https://github.com/portons",
          website : "#"
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
                        <h5 class="speaker-name"><a href="${speaker.social.website}" class="text-blue" target="_blank">${speaker.name}</a></h5>
                        <h6 class="speaker-role">${speaker.position}</h6>
                        <div class="social-links"> 
                            <a href="${speaker.social.twitter}" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a> 
                            <a href="${speaker.social.github}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a> 
                            <a href="${speaker.social.website}" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a> 
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


    $('.speaker-info').on('click', function() {
      var target = $(this).parent().find('.speaker-hover');
      target.trigger('click');
    });

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