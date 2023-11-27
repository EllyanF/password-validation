const validatePassword = (req, res, next) => {
    const password = req.query.password;

    if (password.length <8) {
        return res.status(400).json(
            {error: 'Password must contain at least 8 characters.'}
        );
    }

    if (!password.match(/^.*[a-z].*$/)) {
        return res.status(400).json({
            error: 'Password must have at least one lowercase character.'
        });
    }

    if (!password.match(/^.*[A-Z].*$/)) {
        return res.status(400).json({
            error: 'Password must have at least one uppercase character.'
        });
    }

    if (!password.match(/^.*[0-9].*$/)) {
        return res.status(400).json({
            error: 'Password must have at least one number.'
        });
    }

    if (!password.match(/^.*[$&+,:;=?@#|'<>.-^*()%!].*$/)) {
        return res.status(400).json({
            error: 'Password must have at least one special character.'
        });
    }

    next();
}
module.exports = validatePassword;