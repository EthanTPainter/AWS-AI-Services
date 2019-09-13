for d in ./packages/* ; do
  (cd "$d" && $1);
done