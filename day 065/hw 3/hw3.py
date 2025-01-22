def are_all_distinct(a, b, c):
    if a != b:
        if a != c:
            if b != c:
                return True
    return False