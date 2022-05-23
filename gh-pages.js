import {
    publish
} from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://' + process.env.GH_TOKEN + '@github.com/illumincrotty/illumincrotty.git',
        dotfiles: true
    },
    (e) => {
        console.log(e??"")
        console.log('Deploy Complete!');
    }
);