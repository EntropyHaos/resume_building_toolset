
function init(){
    printf "$PWD\n";
    local DIR;
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
    printf "%s\n" "$DIR"
    local DIR_TO_ACT_ON;
    DIR_TO_ACT_ON=${DIR%*/z_scripts}
    printf "%s\n" "$DIR_TO_ACT_ON"
    cd $DIR_TO_ACT_ON;
    printf "$PWD\n";
    add_commit_push;
    #cut -d'/' -f1 $DIR
}

function add_commit_push(){
    git add --all;
    git commit -m "Scripted Commit!";
    git push --all;
}

init
