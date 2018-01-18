SESSION_NAME="dev"
WINDOW_NAME=$(basename $PWD)
WORKING_DIR="$PWD"

tmux new-session -d -s $SESSION_NAME
tmux rename-window $WINDOW_NAME
tmux send-keys "nodemon express.js -w index.html -w dist" C-m

tmux split-window -h

tmux split-window -v -t {bottom}
tmux send-keys "webpack --config webpack.prod.config.js -w" C-m

tmux select-pane -t {right}

tmux attach -t $SESSION_NAME
