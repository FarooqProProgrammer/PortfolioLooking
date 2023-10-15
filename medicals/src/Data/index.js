function generateRandomID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomID = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomID += characters.charAt(randomIndex);
    }
  
    return randomID;
  }
export const BlogData = [
    {
        img:'https://static.marham.pk/assets/images/home-new/healthy_lifestyle.avif',
        text:'Health Lifecycle',
        id:generateRandomID(10),

    },
    {
        img:'https://static.marham.pk/assets/images/home-new/women_health.avif',
        text:'Woman Health',
        id:generateRandomID(10),

    },
    {
        img:'https://static.marham.pk/assets/images/home-new/skin_care.avif',
        text:'Skin Care',
        id:generateRandomID(10),

    },
    {
        img:'https://static.marham.pk/assets/images/home-new/health-news.avif',
        text:'Health News',
        id:generateRandomID(10),

    },
    {
        img:'https://static.marham.pk/assets/images/home-new/dental_health.avif',
        text:'Denatl Health',
        id:generateRandomID(10),

    },

]