exports.index = (req, res, next) => {
  try {
    const { name, birthdate, date } = req.body

    if (name.trim().split(' ').length <= 1) {
      const error = new Error('Não foi passado nome e sobrenome.')
      error.status = 422 // Unprocessable Entity
      return next(error)
    }

    if (!birthdate.match(/\d{4}(-\d{2}){2}/)) {
      const error = new Error('Data de nascimento com formato incorreto. O certo seria yyyy-mm-dd.')
      error.status = 422
      return next(error)
    }

    if (!date.match(/\d{4}(-\d{2}){2}/)) {
      const error = new Error('Data futúra com formato incorreto. O certo seria yyyy-mm-dd.')
      error.status = 422
      return next(error)
    }

    const [yearBirthdate, monthBirthdate, dayBirthdate] = birthdate.split('-')
    const [yearDate, monthDate, dayDate] = date.split('-')

    if (yearBirthdate > yearDate) {
      const error = new Error('Ano de nascimento maior que o ano da data futura.')
      error.status = 400
      return next(error)
    }

    if (monthBirthdate < 1 || monthBirthdate > 12) {
      const error = new Error('Mês de nascimento inválido.')
      error.status = 400
      return next(error)
    }

    if (dayBirthdate < 1 || dayBirthdate > 31) {
      const error = new Error('Dia de nascimento inválido.')
      error.status = 400
      return next(error)
    }

    if (monthDate < 1 || monthDate > 12) {
      const error = new Error('Mês de nascimento inválido.')
      error.status = 400
      return next(error)
    }

    if (dayDate < 1 || dayDate > 31) {
      const error = new Error('Dia de nascimento inválido.')
      error.status = 400
      return next(error)
    }

    const today = new Date()
    const formatedBirthdate = new Date(birthdate)
    const formatedDate = new Date(date)

    if (!(formatedBirthdate < today)) {
      const error = new Error('Data de nascimento maior que a data atual.')
      error.status = 400
      return next(error)
    }

    if (!(today < formatedDate)) {
      const error = new Error('Dia futuro não é futuro em relação a data atual.')
      error.status = 400
      return next(error)
    }

    const yearsDiff = Math.floor((formatedDate - formatedBirthdate) / (1000 * 60 * 60 * 24 * 365.25))
    const ageNow = Math.floor((today - formatedBirthdate) / (1000 * 60 * 60 * 24 * 365.25))

    const ageThen = yearsDiff
    const quote = `Olá, ${name}! Você tem ${ageNow} anos e em ${dayDate}/${monthDate}/${yearDate} você terá ${ageThen} anos.`

    res.status(200).json({
      quote,
      ageNow,
      ageThen
    })
  } catch (err) {
    const error = new Error(err)
    error.status = 500
    next(error)
  }
}
