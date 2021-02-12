const settings =  {
    
    system : {

     //   maintenance: true,

        lang_api_endpoint : 'https://localise.biz/api/export/all.json?format=multi&key=R_9v_VaDNTKxZwL_GALhXdy_r9APBSUJ',
        available_locales : ["pl"],
        default_locale : "pl",
        api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },
    hero : {

        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1534454501/video_presenter_blak.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/v1534542530/poster_presenter_blak.jpg",
        overlay : "red",
        template : "heroGold",
        heading : "event.claim",
        subheading : "event.description"
    },


  
    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
            
              ]
            },
            // {
            //   name: 'visitors',
            //   items: [
            //     {name: 'visit', to: '/visit'},
            //     // {name: 'schedule', to: '/schedule'},
            //     // {name: 'presenters', to: '/presenters'},
            //     // {name: 'exhibitors', to: '/exhibitors'},
            //     // {name: 'offers', to: '/offers'}
            //   ]
            // },
        
        ]
    },



    visitor : {

        register: {

            wrapperProps: {
                label : "visitors.register",
            },
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
              {name: "nip", required: false},
              {name: "phone", required: true}
            ],
            start : ['email', 'fname'],
            ticket_id : 1730,
            email_template : "pl-visitors-registration",
            background : "/lanyard.jpg",

        },

        benefits : {

            baseLabel: "visitors.benefits",

            items: [

                {
                    icon : "FaLockOpen",
                    label :  'free_entry',
                },
            
                {
                    icon : "FaPiggyBank",
                    label : 'special_offers'
                },
            
                {
                    icon : "FaSearch",
                    label : 'insight'
                },
            
                {   
                    icon : "FaWrench",
                    label : 'case_studies'
                },
            
                {   
                    icon : "FaHandshake",
                    label : 'networking'
                },
            
                {   
                    icon : "FaChartLine",
                    label : 'future'
                }
        ]
        },
      
        api : "https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/register"
    },
    
    common : {

        organizer_name : 'Infoguru Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznań, Truskawiecka 13',
        organizer_regno : 'VAT ID 7811967834',
        event_name : 'ehandel',
        event_location : '',
        event_date : '',
        event_hours : '',

    },

   

    customer_support : {

    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Karolina Michalak',
                position : 'Relationship Manager',
                langs : ["pl","en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1598009850/targiehandlu_people_km.jpg',
                phone: '+48 721 945 134',
                email: 'hello@targiehandlu.pl',
                chatlio : true
            },
          
          ]
    },

    footer : {
        backgroundColor: "#ffffff",
        showEventInfo: false,
        iconStyle : "black",
        links : [
            // {label: "exhibitors.agreement.title", href : "/legal-20200324"},
        ]
    },

    appbar : {
        links: [
            {label: "common.targiehandlu", color: "primary",  href: "https://targiehandlu.pl", as: "/covid19", variant: "contained"}
        ],
    },

  
  


    
};

        

 export default settings