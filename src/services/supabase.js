import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://dmvjhhqxyabasgaysgtd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdmpoaHF4eWFiYXNnYXlzZ3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMDM4OTUsImV4cCI6MjAyNDc3OTg5NX0.i2LJrASO-y8XfhYkXgfrV5CLj_sk7QCs-r9HM5O1zcA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

